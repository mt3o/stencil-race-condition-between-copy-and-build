
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-2l9zhv6s9j',
  shadow: true,
})
export class C2l9zhv6s9j {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  