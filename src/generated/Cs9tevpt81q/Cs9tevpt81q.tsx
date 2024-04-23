
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-s9tevpt81q',
  shadow: true,
})
export class Cs9tevpt81q {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  