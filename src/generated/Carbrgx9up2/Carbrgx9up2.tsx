
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-arbrgx9up2',
  shadow: true,
})
export class Carbrgx9up2 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  